import { serve } from "wren";
import { setup } from 'kretes';

import manifest from './manifest.g.ts';

const routes = setup(manifest);

serve(routes)
