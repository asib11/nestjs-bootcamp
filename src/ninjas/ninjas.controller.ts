import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Put,
  NotFoundException,
} from '@nestjs/common';
import { NinjasService } from './ninjas.service';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}

  @Post()
  creatNinjas(@Body() createNinjaDto: CreateNinjaDto) {
    return this.ninjasService.creatNinjas(createNinjaDto);
  }

  @Get()
  getOneNinjas(@Query('weapon') weapon: 'stars' | 'nunchuks') {
    // const service = new NinjasService();
    try {
      return this.ninjasService.getNinjas(weapon);
    } catch (err) {
      throw new NotFoundException(err);
    }
  }

  @Get(':id')
  getNinja(@Param('id') id: string) {
    return this.ninjasService.getNinja(+id);
  }

  @Put(':id')
  updateNinjas(
    @Param('id') id: string,
    @Body() updateNinjaDto: UpdateNinjaDto,
  ) {
    return this.ninjasService.updateNinjas(+id, updateNinjaDto);
  }

  @Delete(':id')
  removeNinja(@Param('id') id: string) {
    return this.ninjasService.removeNinja(+id);
  }
}
