import editorial from './editorial.json';
import gallery from './gallery.json';
export const copy = editorial;
export const event = {
 title:'Danang AI4Life 2026',fullTitle:'Cuộc thi Trí tuệ nhân tạo và ứng dụng – Danang AI4Life năm 2026',year:2026,
 organizer:'Trường Đại học Công nghệ Thông tin và Truyền thông Việt – Hàn, Đại học Đà Nẵng',audience:'Sinh viên VKU',maxTeamMembers:3,
 contentUpdatedAt:'07/10/2026',sourceStatus:'Tài liệu nguồn 2026 — lịch và nội dung theo bản cung cấp',registrationDeadlineDate:'2026-09-30',registrationDeadlineTime:null,timezone:'Asia/Ho_Chi_Minh',
 forms:{life:'https://forms.gle/CLdWydfUV4LwLh9e9',challenge:'https://forms.gle/WawaJyW1qzpg3JXt7'},
 contact:{name:'TS. Lê Hà Như Thảo',role:'Trưởng phòng Khoa học công nghệ và Hợp tác quốc tế',email:null,phone:null},
 units:copy['6.8'].slice(3,6),channels:[{label:'Website VKU',url:'https://vku.udn.vn/',description:'Thông báo và tin tức từ website nhà trường.'},{label:'Facebook VKU',url:'https://www.facebook.com/vku.udn.vn/',description:'Theo dõi hoạt động và thông báo trên fanpage của trường.'}],
 documents:[{id:'plan',title:'Kế hoạch tổ chức Danang AI4Life 2026',description:'Đối tượng, lịch dự kiến, quyền lợi, trách nhiệm và cơ cấu giải thưởng.',date:'Văn bản ngày 14/09/2026',label:'Tải kế hoạch',path:'/documents/ke-hoach-ai4life-2026.docx'},{id:'rules',title:'Thể lệ và yêu cầu Danang AI4Life 2026',description:'Quy định chung, yêu cầu từng bảng thi và tiêu chí đánh giá AI for Life.',date:'Kèm kế hoạch ngày 14/09/2026',label:'Tải thể lệ',path:'/documents/the-le-ai4life-2026.docx'}],
 prizes:[['Đặc biệt',2],['Nhất',2],['Nhì',2],['Ba',4],['Khuyến khích',15]] as [string,number][],
};
export type TrackId='life'|'challenge';
export const tracks={life:{id:'life' as TrackId,slug:'ai-for-life',title:'AI for Life',eyebrow:copy['6.3'][2],subtitle:copy['6.3'][4],body:copy['6.3'][5],points:copy['6.3'].slice(6,9),metadata:copy['6.3'][9],description:'Chủ động đề xuất và phát triển giải pháp AI để giải quyết các bài toán thực tiễn, phục vụ cộng đồng.',mandatory:'Sinh viên thực hiện Đồ án chuyên ngành 2 các ngành IT và AI thuộc nhóm bắt buộc tham gia theo kế hoạch.'},challenge:{id:'challenge' as TrackId,slug:'ai-challenge',title:'AI Challenge',eyebrow:copy['6.3'][11],subtitle:copy['6.3'][13],body:copy['6.3'][14],points:copy['6.3'].slice(15,18),metadata:copy['6.3'][18],description:'Xây dựng mô hình và giải pháp AI để giải quyết thử thách với đề bài, dữ liệu và yêu cầu do Ban tổ chức cung cấp.',mandatory:'Sinh viên lớp học phần Học máy (1)_TA học kỳ 1 năm học 2026–2027 thuộc nhóm bắt buộc tham gia theo kế hoạch.'}};
export type Milestone={id:string;track:TrackId;title:string;dateText:string;description:string;certainty:'planned'|'needs_confirmation'|'confirmed';dateStart?:string;dateEnd?:string;sourceId:string};
export const milestones:Milestone[]=[
 {id:'life-prelim',track:'life',title:'Sơ tuyển ý tưởng',dateText:'01–10/10/2026',dateStart:'2026-10-01',dateEnd:'2026-10-10',description:'Ban giám khảo đánh giá ý tưởng từ bảng đăng ký dự thi.',certainty:'planned',sourceId:'plan'},
 {id:'life-result',track:'life',title:'Công bố đội vào bán kết',dateText:'15/10/2026',dateStart:'2026-10-15',dateEnd:'2026-10-15',description:'Các đội được chọn bắt đầu xây dựng và hoàn thiện sản phẩm.',certainty:'planned',sourceId:'plan'},
 {id:'life-training',track:'life',title:'Tập huấn và hướng dẫn',dateText:'Theo tổ chức của các khoa và giảng viên hướng dẫn',description:'Tư vấn, định hướng cho các đội vào bán kết. Chưa có ngày cụ thể trong kế hoạch.',certainty:'planned',sourceId:'plan'},
 {id:'life-semi',track:'life',title:'Bán kết',dateText:'20–30/11/2026',dateStart:'2026-11-20',dateEnd:'2026-11-30',description:'Đánh giá giải pháp, sản phẩm để lựa chọn các đội xuất sắc vào chung kết.',certainty:'planned',sourceId:'plan'},
 {id:'life-final',track:'life',title:'Chung kết',dateText:'20–30/12/2026',dateStart:'2026-12-20',dateEnd:'2026-12-30',description:'Vòng đánh giá các đội được lựa chọn theo kế hoạch cuộc thi.',certainty:'planned',sourceId:'plan'},
 {id:'challenge-semi',track:'challenge',title:'Bán kết',dateText:'03–10/10/2026',dateStart:'2026-10-03',dateEnd:'2026-10-10',description:'Tuyển chọn 05 đội tham dự Olympic AI miền Trung.',certainty:'planned',sourceId:'plan'},
 {id:'challenge-training',track:'challenge',title:'Tập huấn đội tuyển',dateText:'Sau tuyển chọn',description:'Các đội được tuyển chọn tham gia tập huấn đội tuyển Olympic AI; theo thông báo của đơn vị tổ chức.',certainty:'planned',sourceId:'plan'},
 {id:'olympic',track:'challenge',title:'Olympic AI miền Trung',dateText:'Kế hoạch ghi 01/11/2026',dateStart:'2026-11-01',dateEnd:'2026-11-01',description:'Mốc này cần được Ban tổ chức xác nhận do tên mùa trong một dòng của văn bản chưa thống nhất với ngày ghi kèm.',certainty:'needs_confirmation',sourceId:'plan'}
];
export const rubrics={prelim:[['Tính khả thi của ý tưởng',20],['Tính độc đáo của ý tưởng',30],['Tính phù hợp của công nghệ của ứng dụng',30],['Tính thuyết phục trong trình bày ý tưởng',20]],final:[['Tính độc đáo của giải pháp/sản phẩm',10],['Tính phù hợp của công nghệ của ứng dụng',10],['Tính đúng, đầy đủ của các tính năng của giải pháp/sản phẩm',10],['Tính hiệu quả của giải pháp/sản phẩm',20],['Chất lượng của giải pháp/sản phẩm',30],['Chất lượng hồ sơ dự thi và các ấn phẩm liên quan',10],['Năng lực trình bày',10]]} satisfies Record<string,[string,number][]>;
export const images=gallery.map(a=>({...a,path:'/assets/Danang_AI4Life_Design_Assets/'+a.path,thumbnail:'/assets/thumbs/'+a.id+'.webp',alt:a.title,sourceUrl:a.source_url,usage:a.usage_note}));
export function businessDate(now=new Date()):string {return new Intl.DateTimeFormat('en-CA',{timeZone:event.timezone,year:'numeric',month:'2-digit',day:'2-digit'}).format(now);}
export function registrationOpen(now=new Date()):boolean{return businessDate(now)<=event.registrationDeadlineDate;}
export function milestoneStatus(m:Milestone,now=new Date()):string{if(m.certainty==='needs_confirmation')return 'Cần xác nhận';const date=businessDate(now);if(!m.dateStart)return 'Theo kế hoạch';if(date<m.dateStart)return 'Sắp đến mốc dự kiến';if(date>(m.dateEnd??m.dateStart))return 'Đã qua mốc dự kiến';return 'Trong khoảng thời gian dự kiến';}
export const registrationText={closed:copy['6.7'][14],open:copy['6.7'][15]};
