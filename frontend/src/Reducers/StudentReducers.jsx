                    import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const getStudent = createAsyncThunk(
    "student/get-student",
    async () => {
        const response = await fetch("http://localhost:5005/student");
        const data = await response.json();
      
        if (data.status === 1) {
            return {
                student: data.student
            };
        } else {
            return {
                student: []
            };
        }
    }
);


// const updateStudent = createAsyncThunk(
//     "student/update-student",
//     async (student) => {
//         // const {id} =useParams();
//         // console.log("http://localhost:5005/student/edit/" + id )
//         console.log(student._id,"ids")
    
//       const response = await axios.patch(`http://localhost:5005/student/edit/${student.id}` , student);
//       console.log(response)
//       const data = response.data;
  
//       if (data.status == 1) {
//         return {
//           student: data.student
//         };
//       } else {
//         toast.error("Failed to Updata student data")
//         throw new Error("Failed to update student data");
//       }
//     });

const StudentSlice = createSlice({
    name: "Student",
    initialState: {
        student: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getStudent.fulfilled, (state, {payload}) => {
                // console.log("action",action)
                state.student=payload.student;
                state.status = 'succeeded';
            })
            .addCase(getStudent.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getStudent.rejected, (state, payload) => {
                state.status = 'failed';
                state.error = payload.error.message;
                state.student = [];
            });

            // builder
            // .addCase(updateStudent.fulfilled, (state, { payload }) => {
            //     console.log(payload,"payload")
            //     state.student = payload.student;
            //     state.status = 'succeeded';
            //   })
            //   .addCase(updateStudent.pending, (state) => {
            //     state.status = 'loading';
            // })
            //   .addCase(updateStudent.rejected, (state, action) => {
            //     state.error = action.error.message;
            //     state.status = 'failed';
            //   });
       
    }
});


export { getStudent };
export default StudentSlice.reducer;
