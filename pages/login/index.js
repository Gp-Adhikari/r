import { useEffect } from "react";

import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/login/user");
  }, [router]);
  return <></>;
};

export default Login;
