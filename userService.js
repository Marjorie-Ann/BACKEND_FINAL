import * as userModel from '../models/userModel.js';
import ValidationError from '../utils/ValidationError.js';
import validator from 'validator';
import bcrypt from 'bcryptjs';

const doesUserExist = async (email) => {
    const existing = await userModel.findUserByEmail(email);

    if (existing.length > 0) {
        return { result: true, user: existing[0] };
    }

    return { result: false, user: undefined };
}

export const createAccount = async (user) => {
    if (!user.name || !user.email || !user.password) {
        throw new ValidationError(400, "Name, email, and password required");
    }
    if (!validator.isEmail(user.email)) {
        throw new ValidationError(400, "Improper Email Format");
    }
    if (!validator.isStrongPassword(user.password)) {
        throw new ValidationError(400, "Password is not strong enough");
    }

    const existing = await doesUserExist(user.email);

    if (existing.result) {
        throw new ValidationError(400, "An account with this email already exists");
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(user.password, salt);

    const result = await userModel.insert(user.name, user.email, hashedPassword);

    if (!result || result <= 0) {
        throw new Error("Unable to create account. Please try again later.");
    }
    return 'Account created successfully';
}

export const login = async (user) => {
    if (!user.email || !user.password) {
        throw new ValidationError(400, "Email and password required");
    }

    const existing = await doesUserExist(user.email);

    if (!existing.result) {
        throw new ValidationError(400, "An account with this email does not exist");
    }

    const isCorrectPassword = await bcrypt.compare(user.password, existing.user.password);

    if (!isCorrectPassword) {
        throw new ValidationError(400, "Incorrect password");
    }
    return 'Login successful';
}