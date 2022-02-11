import { useState } from "react";
export function PageLogin() {
return (
<div className="page-login w-4/12 mx-auto">

    <form>
        <input className="p-4 border border-gray-100 focus:outline-none focus:border-gray-900 w-full mb-8" />
        <input className="p-4 border border-gray-100 focus:outline-none focus:border-gray-900 w-full mb-8" />
        <button className="p-4 bg-line-500 rounded font-bold">Ingresar</button>

    </form>
</div>
);
}