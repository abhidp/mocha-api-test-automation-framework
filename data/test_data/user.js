import qs from 'qs';

export const POST_user_body = qs.stringify({
  first_name: 'Parry',
  last_name: 'Hotter',
  gender: 'male',
  dob: '2020-02-02',
  email: 'parry.hotter@hogwarts.com',
  phone: '123-456-7890',
  website: 'http://parry.hotter.com/',
  address: '99139 Bartoletti Run\nNew Ginoside, IA 91475',
  status: 'active',
});
