import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wokdngtzgqkqsnsqvyxm.supabase.co';
const supabaseKey = 'G2YqPv7EmwoGfFaPJa/So3zV1b97Q8l6My0o3qalrkAUaP/S91Ec3GxSyH+8dqiXIlshk+jcoKL43oGAgoCcnA==';

export const supabase = createClient(supabaseUrl, supabaseKey);
