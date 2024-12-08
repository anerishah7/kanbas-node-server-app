import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
    app.get("/api/enrollments", async (req, res) => {
        const enrollments = await dao.findAllEnrollments();
        res.send(enrollments);
    });
    app.delete("/api/unenroll/:userId/:courseId", (req, res) => {
        const { userId } = req.params;
        const { courseId } = req.params;
        dao.deleteEnrollment(userId, courseId);
        res.sendStatus(204);
    });
    app.post("/api/enroll/:userId/:courseId", (req, res) => {
        const { userId } = req.params;
        const { courseId } = req.params;
        const newEnrollment = dao.enrollUserInCourse(userId, courseId);
        res.send(newEnrollment);
    });
}
