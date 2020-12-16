import { Router } from 'express';
import UserController from './controllers/user';
import QuestionController from './controllers/question';
import AnswerController from './controllers/answer';

const router = Router();

router.get('/questions', QuestionController.index);
router.post('/users/', UserController.index);
router.post('/answers', AnswerController.index);

export default router;
