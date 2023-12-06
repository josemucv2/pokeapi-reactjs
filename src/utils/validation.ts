import {
    PATTERNS_EMAIL,
    PATTERNS_SPACE_INPUTS
} from "./regExp";


/**
 * Validates if a value is required.
 * @param {string | boolean} value - The value to be validated.
 * @returns {string} - The error message if the value is empty, otherwise an empty string.
 */
export const validateRequired = (value: string | boolean): string => {
    const empty = value === undefined || value === null || value === "" || value === false;
    if (empty) return "Campo Requerido";
    return "";
};


/**
 * Validates if an email is valid.
 * @param {string} value - The email to be validated.
 * @returns {string} - The error message if the email is invalid or empty, otherwise an empty string.
 */
export const validateEmail = (value: string): string => {
    if (validateRequired(value)) return validateRequired(value);

    if (!new RegExp(PATTERNS_EMAIL).test(value)) return "Correo invalido";
    return "";
};


/**
 * Validates if a string contains at least one character.
 * @param {string} value - The string to be validated.
 * @returns {string} - The error message if the string is empty or contains only spaces, otherwise an empty string.
 */
export const validateSpaceString = (value: string): string => {

    if (validateRequired(value)) return validateRequired(value);
    if (new RegExp(PATTERNS_SPACE_INPUTS).test(value)) return 'Elementos invalido';

    return "";
};

