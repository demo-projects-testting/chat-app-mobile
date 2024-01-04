export const usernameRegex = new RegExp(/^[^#]{2,32}#\d{4}$|^(?!.*\.\.|[A-Z])[a-z\d_.]{2,32}$/gm);

export const passwordRegex = new RegExp(/^[a-zA-Z0-9]{6,}$/g);
