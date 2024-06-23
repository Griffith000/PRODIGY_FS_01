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
const Profile = () => {
  const currentUser = useSelector((state) => state.user.user);
  const [image, setImage] = useState(undefined);
  const [imgPercent, setImgPercent] = useState(0);
  const [imgError, setImgError] = useState(false);
  const [formData, setFormData] = useState({});

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
          console.log("Image uploaded successfully: ", downloadURL);
        });
      }
    );
  };

  return (
    <div>
      <div className="font-semibold text-4xl text-center mt-10">Profile</div>
      <form className="mx-auto flex flex-col max-w-lg" action="">
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
          src={formData.profilePicture || currentUser.profilePicture}
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
        <input
          defaultValue={currentUser.username}
          type="text"
          placeholder="Username"
        />
        <input
          defaultValue={currentUser.email}
          type="email"
          placeholder="Email"
        />
        <input type="password" placeholder="Password" />
        <button className="bg-slate-600 text-white rounded p-2 self-center w-full uppercase">
          Update
        </button>
        <div className="flex justify-between m-2 text-red-700">
          <button className="">Delete account</button>
          <button className="rounded p-2 self-center w-1/4">Sign Out</button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
