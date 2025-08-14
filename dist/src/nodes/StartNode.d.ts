import { BaseNode } from './BaseNode';
import { StartNodeTrigger } from '../constants/Actions';
export declare class StartNode extends BaseNode {
    constructor({ trigger_type, event, cron_expression, api_call_payload }: {
        trigger_type: StartNodeTrigger;
        event?: {
            application_slug: string;
            event_id: string;
        };
        cron_expression?: string;
        api_call_payload?: Record<string, any>;
    });
    get event(): any;
}
