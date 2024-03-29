import { HttpException, HttpStatus } from '@nestjs/common';

class PostNotFoundException extends HttpException {
  constructor(postId: number) {
    super(`Post with ${postId} not found`, HttpStatus.NOT_FOUND);
  }
}

export default PostNotFoundException;
