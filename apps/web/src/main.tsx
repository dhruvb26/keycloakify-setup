import { createRoot } from "react-dom/client";
import { StrictMode, lazy, Suspense } from "react";
import { KcPage, type KcContext } from "./keycloak-theme/kc.gen.tsx";
const AppEntrypoint = lazy(() => import("./main.app.tsx"));

// to test a specific page
// import { getKcContextMock } from "./keycloak-theme/login/KcPageStory";

// if (import.meta.env.DEV) {
//     window.kcContext = getKcContextMock({
//         pageId: "login.ftl",
//         overrides: {}
//     });
// }


createRoot(document.getElementById("root")!).render(
    <StrictMode>
        {window.kcContext ? (
            <KcPage kcContext={window.kcContext} />
        ) : (
            <Suspense>
                <AppEntrypoint />
            </Suspense>
        )}
    </StrictMode>
);

declare global {
    interface Window {
        kcContext?: KcContext;
    }
}