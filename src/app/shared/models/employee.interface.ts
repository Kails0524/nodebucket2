
// Title: nodebucket
// Author: Professor Krasso
// Date: 13 Jan 2023
// Modified by: Kailee Stephens
// Attributions: Code from Bellevue Web Dev sessions
// https://github.com/buwebdev/web-450

import { Item } from './item.interface';

export interface Employee {
  empId: number;
  firstName: string;
  lastName: string;
  todo: Item[];
  done: Item[];
}
