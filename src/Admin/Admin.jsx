import { Outlet } from "react-router";
import { HeaderAdmin } from "./components/HeaderAdmin";
import { NavMenu } from "./components/NavMenu";
import { useState } from "react";

export function AdminPage() {
  const [isOpenMenu, setIsOpenMenu] = useState(true);

  return (
    <div>
      <HeaderAdmin openMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
      <div className="flex h-full relative">
        {isOpenMenu && <NavMenu />}
        <div className="flex-1 overflow-y-auto">
          <div>
            <main>
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
