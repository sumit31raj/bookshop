import React, { useEffect } from "react";
import { USER_ID } from "@/constants"; 

const getUniqueID = () => Math.ceil(Math.random() * Date.now()).toPrecision(16).toString().replace(".", "");

export const useManageUserId = () => {
  useEffect(() => {
    const userid = localStorage.getItem(USER_ID);

    if (!userid) {
      const userid = getUniqueID();
      localStorage.setItem(USER_ID, userid);
    }

  }, []);    
};
