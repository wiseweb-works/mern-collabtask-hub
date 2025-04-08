import { useContext, useState } from "react";
import AuthLayout from "../../components/Layouts/AuthLayout";
import { validateEmail } from "../../utils/helper";
import ProfilePhotoSelector from "../../components/Inputs/ProfilePhotoSelector";
import Input from "../../components/Inputs/Input";
import { Link, useNavigate } from "react-router";
import { API_PATH } from "../../utils/apiPath";
import axiosInstance from "../../utils/axiosInstance";
import { UserContext } from "../../context/UserContext";
import uploadImage from "../../utils/uploadImage";
import axios from "axios";

const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminInviteToken, setAdminInviteToken] = useState("");

  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    let profileImageUrl = "";

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!fullName) {
      setError("Please enter full name");
      return;
    }

    if (!password) {
      setError("Please enter the password");
      return;
    }

    setError("");

    try {
      if (profilePic) {
        const imgUploadRes = await uploadImage(profilePic);
        profileImageUrl = imgUploadRes.imageUrl || "";
        const response = await axiosInstance.post(API_PATH.AUTH.REGISTER, {
          name: fullName,
          email,
          password,
          profileImageUrl,
          adminInviteToken,
        });

        const { token, role } = response.data;

        if (token) {
          localStorage.setItem("token", token);
          updateUser(response.data);

          if (role === "admin") {
            navigate("/admin/dashboard");
          } else {
            navigate("/user/dashboard");
          }
        }
      }
    } catch (error) {
      if (
        axios.isAxiosError(error) &&
        error.response &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <AuthLayout>
      <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Create an Account</h3>
        <p className="text-sx text-slate-700 mt-[5px] mb-6">
          Join us today by entering your details below.
        </p>

        <form onSubmit={handleSignUp}>
          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              value={fullName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFullName(e.target.value)
              }
              label="Full Name"
              placeholder="John Doe"
              type="text"
            />
            <Input
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              label="Email Address"
              placeholder="john@example.com"
              type="text"
            />

            <Input
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              label="Password"
              placeholder="Min 8 Characters"
              type="password"
            />

            <Input
              value={adminInviteToken}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setAdminInviteToken(e.target.value)
              }
              label="Admin Invite Token"
              placeholder="6 Digit Code"
              type="text"
            />
          </div>
          {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

          <button type="submit" className="btn-primary">
            SIGN UP
          </button>

          <p className="text-[13px] text-slate-800 mt-3">
            Already have an account?{" "}
            <Link className="font-medium text-primary underline" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
