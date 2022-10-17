import React from "react";
import { SIGN_IN } from "../../utils/constant";

const Remember = ({ type }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
        <label
          htmlFor="remember-me"
          className="ml-2 block text-sm text-gray-900"
        >
          {type === SIGN_IN ? "Remember me" : "Redirect to Sign-in"}
        </label>
      </div>

      {type === SIGN_IN && (
        <div className="text-sm">
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Forgot your password
          </a>
        </div>
      )}
    </div>
  );
};

export default Remember;
