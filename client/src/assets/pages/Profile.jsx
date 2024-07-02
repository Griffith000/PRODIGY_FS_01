import React from "react";
import { useSelector } from "react-redux";
import { useRef, useEffect, useState } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../../firebase";
import {useDispatch} from "react-redux";
import { updateUserStart, updateUserSuccess,updateUserFail } from "../../redux/user/userSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const currentUser  = useSelector((state) => state.user.user);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);
  const [image, setImage] = useState(undefined);
  const [imgPercent, setImgPercent] = useState(0);
  const [imgError, setImgError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateWorks, setUpdateWorks] = useState(false);

  const fileRef = useRef();
  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);
  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Progress callback
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImgPercent(progress.toFixed(2));
      },
      (error) => {
        // Error callback
        setImgError(true);
        console.log(error);
      },
      () => {
        // Completion callback
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({...formData,profilePicture: downloadURL
        });
        });
      }
    );
  };
const handleUpdate = (e) => {
  setFormData({ ...formData, [e.target.id]: e.target.value });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    dispatch(updateUserStart());
    const res = await fetch(`/api/user/update/${currentUser._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    const data = await res.json();
    console.log(data);
    if (data.success === false) {
      dispatch(updateUserFail(data));
      return;
  } 
    dispatch(updateUserSuccess(data));
  
    setUpdateWorks(true);
}catch (err) {
    dispatch(updateUserFail(err));
    console.error("Error sending formData:", err);
  }
};
  return (
    <div>
      <div className="font-semibold text-4xl text-center mt-10">Profile</div>
      <form  onSubmit={handleSubmit} className="mx-auto flex flex-col max-w-lg" action="">
        <input
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />

        {/* firebase storage rules 
          allow read;
          allow write : if
          request.resource.size < 2 * 1024 * 1024 &&
          request.resource.contentType.mathes("image/.*")  */}
        <img
          className="h-20 w-20 rounded-full self-center m-3 cursor-pointer object-cover "
          onClick={() => fileRef.current.click()}
          src={ currentUser.profilePicture || formData.profilePicture}
          alt="Profile Picture"
        />
        <div className="text-red-700 text-center m-2">
          {imgPercent > 0 && imgPercent < 100 ? (
            <div className="text-green-700 text-center m-2">
              Uploading {imgPercent}%
            </div>
          ) : imgPercent >= 100 ? (
            <div className="text-green-700 text-center m-2">
              Image uploaded successfully
            </div>
          ) : imgError ? (
            "Error uploading image (file size must be less than 2 MB)"
          ) : (
            " "
          )}
        </div>
        <input onChange={handleUpdate}
          defaultValue={currentUser.username}
          type="text"
          placeholder="Username"
        />
        <input onChange={handleUpdate}
          defaultValue={currentUser.email}
          type="email"
          placeholder="Email"
        />
        <input onChange={handleUpdate} type="password" placeholder="Password" />
        <button type="submit" className="bg-slate-600 text-white rounded p-2 self-center w-full uppercase">
        { loading ? "Loading..." : "Update"}
        </button>
        <div className="flex justify-between m-2 text-red-700">
          <button className="">Delete account</button>
          <button className="rounded p-2 self-center w-1/4">Sign Out</button>
        </div>
        <p className="text-red-600 ">{error && "Something went wrong!"}</p>
        <p className="text-green-600 ">{updateWorks && "User updated successfully"}</p>
      </form>
    </div>
  );
};

export default Profile;
