import { randomString } from '../utils/randomString.js';
export const createPropertyId = () => randomString(10, { numbers: true, lower: true, upper: false, special: false });
