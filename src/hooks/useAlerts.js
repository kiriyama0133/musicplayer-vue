// src/hooks/useAlerts.ts
import { useCounterStore } from '../stores/userlogin';
export function useAlerts() {
    const user = useCounterStore();
    const shutAlerts = () => {
        setTimeout(() => {
            user.alert_error = false;
            user.alert_info = false;
            user.alert_message = false;
            user.alert_sucess = false;
        }, 3000);
    };
    return {
        shutAlerts,
    };
}
