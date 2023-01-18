import Image from "next/image";
import React, { useRef, useState } from "react";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { db, storage } from "../firebase";
import firebase from "firebase/compat/app";

const InputBox = () => {
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);
  const sendPost = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    db.collection("posts")
      .add({
        message: inputRef.current.value,
        // name: session.user.name
        name: "Haruna Faruk",
        email: "harunafaruk@gmail.com",
        image:
          "https://media.licdn.com/dms/image/D4D03AQEuiGeEmjJ-Sg/profile-displayphoto-shrink_800_800/0/1672912946884?e=1679529600&v=beta&t=g32mdKsENuUHf5oeA7KqSiv6pUPANyr3gDtmrKwBQvs",
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (imageToPost) {
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(imageToPost, "data_url");

          removeImage();

          uploadTask.on(
            "state_change",
            null,
            (error) => console.log(error),
            () => {
              //when the upload complete
              storage
                .ref("posts")
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts").doc(doc.id).set(
                    {
                      postImage: url,
                    },
                    { merge: true }
                  );
                });
            }
          );
        }
      });
    inputRef.current.value = "";
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };
  const removeImage = () => {
    setImageToPost(null);
  };
  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <Image
          className="rounded-full cursor-pointer"
          // src={session.user.image}
          src="https://media.licdn.com/dms/image/D4D03AQEuiGeEmjJ-Sg/profile-displayphoto-shrink_800_800/0/1672912946884?e=1679529600&v=beta&t=g32mdKsENuUHf5oeA7KqSiv6pUPANyr3gDtmrKwBQvs"
          width="40"
          height="40"
          fixed="true"
          alt="."
        />
        <form className="flex flex-1">
          <input
            className="rounded-full flex-grow h-12 bg-gray-100 px-5 outline-none"
            type="text"
            placeholder={`What's on your mind, ${"Haruna Faruk"}?`}
            ref={inputRef}
          />
          <button className="hidden" type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>
        {imageToPost && (
          <div
            className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
            onClick={removeImage}
          >
            <img className="h-10 object-contain " src={imageToPost} alt="" />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
      </div>
      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div className="inputIcon" onClick={() => filePickerRef.current.click}>
          <CameraIcon
            className="h-7 text-green-400"
            onClick={() => filePickerRef.current.click()}
          />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input
            onChange={addImageToPost}
            ref={filePickerRef}
            type="file"
            hidden
          />
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
