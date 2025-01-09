import { ApiProperty } from '@nestjs/swagger';
import { FileType } from '../../../../domain/file';

export class FilesResponseDto {
  @ApiProperty({
    type: () => FileType,
  })
  files: FileType[];
}
