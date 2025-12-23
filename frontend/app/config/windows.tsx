import PersonalInfo from "../components/contents/PersonalInfo";

export type WindowId = 'info' | 'resume';

export interface WindowConfig {
    title: string;
    component: React.ComponentType<any>;
    maxWidth?: number;
    initialPosition?: { x: number, y: number };
}

export const WINDOW_REGISTRY: Record<WindowId, WindowConfig> = {
    info: {
        title: "Info",
        component: PersonalInfo,
        maxWidth: 420,
    },
    resume: {
        title: "Resume Viewer",
        // Inline component for now, or could extract to separate file
        component: () => (
            <div className="w-full h-full flex items-center justify-center p-8 bg-neutral-100 dark:bg-neutral-900 text-neutral-500">
                <div className="text-center">
                    <p className="text-lg font-semibold mb-2">Resume PDF</p>
                    <p className="text-sm">No PDF file found yet.</p>
                </div>
            </div>
        ),
        maxWidth: 600,
    }
};
