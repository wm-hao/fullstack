import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { DbService } from './db.service';

@Module({
  imports:[
    // TypegooseModule.forRoot('mongodb://localhost/topfullstack',{
    //    useCreateIndex: true,
    //    useFindAndModify: false,
    //    useNewUrlParser: true,
    //    useUnifiedTopology: true
    // })
  ],
  providers: [DbService],
  exports: [DbService],
})
export class DbModule {}
