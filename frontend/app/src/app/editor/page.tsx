import Home from "./actualPage";
import { protectPage } from "@/lib/actions";

export default async function Page() {
  await protectPage();

  return (
    <>
      <div className="flext m-32 justify-center ">
        <Home />
      </div>
    </>
  );
}
