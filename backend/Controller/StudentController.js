const Student = require("../Module/Student")
const mongoose = require('mongoose');
class StudentController {

    get(id) {
        return new Promise(
            async (res, rej) => {
                try {
                    let student = null;
                    if (id != null || id != undefined) {
                        student = await Student.findById(id);
                    } else {
                        student = await Student.find();
                    }
                    res(
                        {
                            msg: "Student Data Found",
                            status: 1,
                            student
                        }
                    )
                } catch (error) {
                    console.log(error)
                    rej(
                        {
                            msg: "Internal Server Error",
                            status: 0,
                            error
                        }
                    )
                }

            }
        )
    }

    create(data) {
        // console.log(data)
        return new Promise(
            (res, rej) => {
                try {
                    const student = new Student(data);
                    student.save()
                        // console.log(data)
                        .then(
                            (success) => {
                                res(
                                    {
                                        msg: "Student Data Added ",
                                        status: 1
                                    }
                                )
                            }
                        ).catch(
                            (error) => {
                                console.log(error)
                                rej(
                                    {
                                        msg: " Unable to Student Added  ",
                                        status: 1
                                    }
                                )
                            }
                        )
                } catch (error) {
                    console.log(error)
                    rej(
                        {
                            msg: "Internal Server Error ",
                            status: 1
                        }
                    )
                }
            }
        )
    }

   

    edit(id, data) {
        console.log(id,"id")
        console.log(data,"data")
        return new Promise((res, rej) => {
            try {
                // Ensure id is a valid ObjectId
                if (!mongoose.Types.ObjectId.isValid(id)) {
                    console.error("Invalid ID format:", id);

                    return rej({
                        msg: "Invalid ID format",
                        status: 0
                    });
                }
    
                // Convert id to ObjectId
                const objectId = new  mongoose.Types.ObjectId(id);
                console.log("Converted ObjectId:", objectId.toString());
    
                Student.updateOne(
                    { _id: objectId },
                    {
                        $set: {
                            name: data.name,
                            email: data.email,
                            contact: data.contact,
                            age: data.age,
                            institutions: data.institutions,
                            degrees: data.degrees,
                            years: data.years,
                            coursename: data.coursename,
                            instructor: data.instructor,
                            duration: data.duration
                        }
                    }
                ).then((success) => {
                    if (success.modifiedCount === 0) {
                        console.error("No document was updated");
                        return rej({
                            msg: "No document was updated",
                            status: 0
                        });
                    }
                    // console.log("Update successful:", success);
                    res({
                        msg: "Data Updated",
                        status: 1
                    });
                }).catch((error) => {
                    // console.error("Update error:", error);
                    rej({
                        msg: "Data not Updated",
                        status: 0
                    });
                });
    
            } catch (error) {
                // console.error("Internal Server Error:", error);
                rej({
                    msg: "Internal Server Error",
                    status: 0
                });
            }
        });
    }
}
 
module.exports = StudentController;