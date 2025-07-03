import { Transform } from "stream";

/**
 * Creates a Transform stream that converts streamed JSON data to a standardized JSON string format.
 * 
 * The transform function parses each chunk of data as JSON, then stringifies it to ensure consistent
 * JSON formatting across all data chunks. This is useful for processing streams of JSON data where
 * consistent formatting is required.
 * 
 * @returns {Transform} A Transform stream that processes JSON data.
 */

export const streamTransformToJson = () =>
  new Transform({
    transform(chunk, encoding, callback) {
      callback(null, JSON.stringify(JSON.parse(chunk.toString())));
    },
  });

