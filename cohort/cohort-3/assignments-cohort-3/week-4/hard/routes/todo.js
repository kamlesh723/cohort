const { Router } = require("express");
const { userMiddleware } = require("../middleware/user"); 
const { Todo } = require("../database");
const router = Router();

// todo Routes
 // Implement todo creation logic
router.post('/',userMiddleware,async (req,res)=>{
     const userId = req.userId //fr middleware bcz middlewres set's user id after verify jwt
    const title = req.body.title
    const description = req.body.description
    const done = req.body.done
   
    try {
        const newtodo  =await Todo.create({
            userId,
            title,
            description,
            done
        }) 
    
        res.json({
           message:"todo created succesfully",
           Todo:newtodo
        })
        
    } catch (error) {
         res.status(500).json({
            message: "Failed to create todo",
            error: error.message
        });
    }
})
//update a todo
router.put('/:id', userMiddleware, async(req, res) => {
    const todoId = req.params.id;
     const userId = req.userId
    const title = req.body.title
    const description = req.body.description
    const done = req.body.done
    try {
        //build update with only provided fields
        const updateData = {}
        if(title!= undefined) updateData.title = title;
        if(description!=undefined) updateData.description = description;
        if(done!==undefined) updateData.done = done
        //update only if belong to this user
        const updatedTodo = await Todo.findOneAndUpdate(
            {_id:todoId,userId:userId},updateData,
            {new:true}
        );
        if (!updatedTodo) {
            return res.status(404).json({
                message: "Todo not found or you don't have permission"
            });
        }
         res.json({
            message: "Todo updated successfully",
            todo: updatedTodo
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to update todo",
            error: error.message
        });
    }
});

router.delete('/', userMiddleware, (req, res) => {
    // Implement delete todo logic
    const userId = req.body.userId
    const title = req.body.title
    const dsecription = req.body.dsecription
    const done = req.body.done

    Todo.deleteMany({
        title,
        dsecription
    })
     res.json({
       Todo
    })

});

router.delete('/:id', userMiddleware, async(req, res) => {
    // Implement delete todo by id logic
    const todoId = req.params.id;
    const userId = req.userId;

    try {
         const deleteTodo = await Todo.findOneAndDelete({
        _id:todoId,
        userId:userId
    });
     if (!deleteTodo) {
            return res.status(404).json({
                message: "Todo not found or you don't have permission"
            });
        }
        res.json({
              message: "Todo deleted successfully",
            todo: deleteTodo
        })

    } catch (error) {
         res.status(500).json({
            message: "Failed to delete todo",
            error: error.message
        });
    }
   

});


router.get('/', userMiddleware,async (req, res) => {
    // Implement fetching all todo logic
    const userId = req.userId

    try {
        const todos =await Todo.find({userId:userId});
        res.json({
            todos
        })
    } catch (error) {
         res.status(500).json({
            message: "Failed to fetch todos",
            error: error.message
        });
    }
});

router.get('/:id', userMiddleware, async(req, res) => {
    // Implement fetching todo by id logic
        const todoId = req.params.id;
    const userId = req.userId;

    try {
        const todo = await Todo.findOne({
            _id:todoId,
            userId:userId
        });
        if (!todo) {
            return res.status(404).json({
                message: "Todo not found or you don't have permission"
            });
        }
        
        res.json({
            todo
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch todo",
            error: error.message
        });
    }
});

module.exports = router;