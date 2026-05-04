import Navbar from "@/components/navigation/navbar/components/navbar";

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default AuthLayout;
