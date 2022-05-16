import { useEffect } from "react";

import { useRouter } from "next/router";
const Signup = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/signup/user");
  }, [router]);
  return <></>;
};
export default Signup;
