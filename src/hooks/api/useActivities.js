import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activitiesApi from '../../services/activityApi';

export default function useActivities() {
  const token = useToken();
  
  const {
    data: activities,
    loading: activitiesLoading,
    error: activitiesError,
    act: getActivities
  } = useAsync(() => activitiesApi.getActivitiesByDateId(token));

  return {
    activities,
    activitiesLoading,
    activitiesError,
    getActivities
  };
}