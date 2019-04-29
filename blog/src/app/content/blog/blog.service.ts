import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {

    getBlogList(month: number) {
       return this.getList()[month];
    }

    getList() {
        return {
            0: [
                {
                    title: 'Mussum ipsum cacilds',
                    context: 'Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim.',
                    photoUrl: '../assets/stylesheets/images/blog1.png',
                    date: '2018-01-05'
                },
                {
                    title: 'Mussum ipsum cacilds',
                    context: 'Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis',
                    photoUrl: '../assets/stylesheets/images/blog2.png',
                    date: '2018-01-20'
                },
            ],
            1: [
                {
                    title: 'Mussum ipsum cacilds',
                    context: 'Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim.',
                    photoUrl: '../assets/stylesheets/images/blog1.png',
                    date: '2018-02-10'
                },
                {
                    title: 'Mussum ipsum cacilds',
                    context: 'Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis',
                    photoUrl: '../assets/stylesheets/images/blog2.png',
                    date: '2018-03-21'
                },
            ],
            2: [],
            3: [],
            4: [
                {
                    title: 'Mussum ipsum cacilds',
                    context: 'Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim.',
                    photoUrl: '../assets/stylesheets/images/blog1.png',
                    date: '2018-05-01'
                },
                {
                    title: 'Mussum ipsum cacilds',
                    context: 'Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis',
                    photoUrl: '../assets/stylesheets/images/blog2.png',
                    date: '2018-05-22'
                },
            ],
            5: [
                {
                    title: 'Mussum ipsum cacilds',
                    context: 'Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim.',
                    photoUrl: '../assets/stylesheets/images/blog1.png',
                    date: '2018-05-01'
                },
                {
                    title: 'Mussum ipsum cacilds',
                    context: 'Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis',
                    photoUrl: '../assets/stylesheets/images/blog2.png',
                    date: '2018-05-22'
                }
            ],
            6: [],
            7: [],
            8: [],
            9: [
                {
                    title: 'Mussum ipsum cacilds',
                    context: 'Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim.',
                    photoUrl: '../assets/stylesheets/images/blog1.png',
                    date: '2018-08-10'
                },
                {
                    title: 'Mussum ipsum cacilds',
                    context: 'Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis',
                    photoUrl: '../assets/stylesheets/images/blog2.png',
                    date: '2018-08-30'
                }
            ],
            10: [],
            11: [],
        };
    }
}
