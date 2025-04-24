export const BASE_URL = import.meta.env.VITE_API_URL;

export const API_PATH = {
  AUTH: {
    REGISTER: "/api/auth/register",
    LOGIN: "/api/auth/login",
    GET_PROFILE: "/api/auth/profile",
  },
  USERS: {
    GET_ALL_USERS: "/api/users",
    GET_USER_BY_ID: (userId: string) => `/api/users/${userId}`,
    CREATE_USER: "/api/users",
    UPDATE_USER: (userId: string) => `/api/users/${userId}`,
    DELETE_USER: (userId: string) => `/api/users/${userId}`,
  },
  TASKS: {
    GET_DASHBOARD_DATA: "/api/tasks/dashboard-data",
    GET_USER_DASHBOARD_DATA: "/api/tasks/user-dashboard-data",
    GET_ALL_TASKS: "/api/tasks",
    GET_TASK_BY_ID: (taskId: string) => `/api/tasks/${taskId}`,
    CREATE_TASK: "/api/tasks",
    UPDATE_TASK: (taskId: string) => `/api/tasks/${taskId}`,
    DELETE_TASK: (taskId: string) => `/api/tasks/${taskId}`,

    UPDATE_TASK_STATUS: (taskId: string) => `/api/tasks/${taskId}/status`,
    UPDATE_TODO_CHECKLIST: (taskId: string) => `/api/tasks/${taskId}/todo`,
  },
  REPORTS: {
    EXPORT_TASKS: "/api/reports/export/tasks",
    EXPORT_USERS: "/api/reports/export/users",
  },
  IMAGE: {
    UPLOAD: "/api/auth/upload-image",
  },
};
