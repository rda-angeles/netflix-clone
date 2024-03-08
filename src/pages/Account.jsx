import React from "react";
import SavedShows from "../components/SavedShows";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/97a32351-a650-4689-8e5f-6365b4ac9c02/PH-en-20240226-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
        />

        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>

        <div className="absolute top-[20%] p-4 md:p-8 ">
          <h1 className="text-3xl md:text-5xl font-bold">My shows</h1>
        </div>
      </div>

      <SavedShows />
    </>
  );
};

export default Account;
