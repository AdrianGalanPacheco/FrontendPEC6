import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: string, defaultImg: string = 'assets/images/default.jpg'): string {
    if (!value || value.trim() === '') {
      return defaultImg;
    }
    return value;
  }

}
