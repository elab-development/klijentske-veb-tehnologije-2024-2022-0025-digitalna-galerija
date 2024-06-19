
// Interface for user data
export interface User {
    username: string;
    password: string;
  }
  
  // Interface for LoginManager props
  export interface LoginManagerProps {
    users: User[];
  }
  