import { Map } from '../../map';
import { Control } from '../control';
import { ControlOptions } from '../../types';
/**
 * A control for change floor layer level on the map.
 * It appears on the map only if you set the `floorControl` option within @type MapOptions to `true`.
 */
export declare class FloorControl extends Control {
    private _map;
    private _root;
    private _content;
    private _floor;
    private _handlers;
    constructor(map: Map, options: ControlOptions);
    destroy(): void;
    private _removeButtonsEventListeners;
    private _showControl;
    private _hideControl;
    private _onLevelChange;
    private _controlHandler;
    private _switchCurrentFloorLevel;
}
