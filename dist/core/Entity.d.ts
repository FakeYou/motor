import Component from './components/component';
export interface Entity {
    id: string;
    components: Array<Component>;
}
export default function createEntity(components: Array<Component>): Entity;
