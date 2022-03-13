/** Make TypeScript accept recordings. */

import type {ReplayData} from "liqvid";
import type Cursor from "rp-cursor";
import type {CodeReplay} from "rp-codemirror";
import type {PaintReplay} from "rp-paint";

declare module "@liqvid/utils/json" {
  interface GetJSONMap {
    "recordings": {
      code: React.ComponentProps<typeof CodeReplay>["replay"];
      cursor: React.ComponentProps<typeof Cursor>["replay"];
      paint: React.ComponentProps<typeof PaintReplay>["replay"];
    };
  }
}
