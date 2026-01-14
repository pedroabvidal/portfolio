import { createFileRoute } from "@tanstack/react-router";
import Main from "../pages/index";

export const Route = createFileRoute("/")({
	component: Main,
});