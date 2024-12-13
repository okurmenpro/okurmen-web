/**
 * Geographical bounds.
 */
export interface LngLatBounds {
    /**
     * The south-west point of the bounds `[longitude, latitude]`.
     */
    southWest: number[];
    /**
     * The north-east point of the bounds `[longitude, latitude]`.
     */
    northEast: number[];
}
/**
 * A `LngLatBoundsClass` class represents a geographical bounding box (LngLatBounds),
 * defined by its southwest and northeast points in longitude and latitude
 * with some additional methods
 */
export declare class LngLatBoundsClass implements LngLatBounds {
    /**
     * The south-west point of the bounds `[longitude, latitude]`.
     */
    southWest: number[];
    /**
     * The north-east point of the bounds `[longitude, latitude]`.
     */
    northEast: number[];
    /**
     * Example:
     * ```js
     * const lngLatBounds = new mapgl.LngLatBoundsClass({
     *   southWest: [0, 0],
     *   northEast: [1, 1],
     * });
     * ```
     * @param params southWest and northEast points
     */
    constructor(params: {
        southWest: number[];
        northEast: number[];
    });
    /**
     * Extend the bounds to include a given point.
     * @param point The geographical coordinates `[lng, lat]`.
     */
    extend(point: number[]): this;
}
