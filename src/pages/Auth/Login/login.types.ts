import { ChangeEvent } from "react";
import { IUser } from "@/interfaces";


/**
 * Object representing form data.
 * @typedef {Object} formDataType
 * @param {string} email - User's email address.
 * @param {string} password - User's password.
 */
export type formDataType = Pick<IUser, 'email'> & Pick<IUser, 'password'>;

/**
 * Return type for useLogin hook.
 * @typedef {Object} useLoginReturnType
 * @param {function} handleInputChange - Function to handle input changes.
 * @param {function} login - Function to perform login.
 * @param {formDataType} formData - Form data object containing email and password.
 * @param {boolean} loading - Indicates if login process is ongoing.
 */
export type useLoginReturnType = {
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  login: () => void;
  formData: formDataType;
  loading: boolean;
  errorData: formDataType
};
