/// <reference types="node" />
import Events from 'events';
import Motor from '../..';
export default class EventManager extends Events {
    motor: Motor;
    constructor(motor: Motor);
}
