import type { Handler } from "wren/types.ts";
import * as Response from 'wren/response.ts';

export const handler: Handler = (request) => {
  return Response.OK(
    [
      {
        title: 'Hello, world'
      },
      {
        title: 'Another world'
      }
    ]
  );
}; 