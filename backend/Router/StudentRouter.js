const express = require("express");
const StudentController = require("../Controller/StudentController");
const StudentRouter = express.Router();

StudentRouter.get(
    "/:id?",
    (req, res) => {
        const id = req.params.id;
        const result = new StudentController().get(id);
        result.then(
            (success) => {
                res.send(success);
            }
        ).catch(
            (error) => {
                res.send(error);
            }
        )

    }

);


StudentRouter.post(
    "/create",
    (req, res) => {
        const result = new StudentController().create(req.body);
        result.then(
            (success) => {
                res.send(success)
            }
        ).catch(
            (error) => {
                console.log(error)
                res.send(error)
            }
        );
    });

StudentRouter.patch(
    "/edit/:id",
    (req, res) => {

        // console.log(image)
        const result = new StudentController().edit(req.params.id,req.body);
        result.then(
            (success) => {
                res.send(success);
            }
        ).catch(
            (error) => {
                res.send(error);
            }
        )
    }

    );

module.exports = StudentRouter;
