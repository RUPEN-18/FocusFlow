const test=require('node:test'),a=require('node:assert/strict'),C=require('./core');
test('pause and resume',()=>{const s=C.initial();C.toggle(s,1000);a.equal(C.remaining(s,2000),1499000);C.toggle(s,2000);a.equal(C.remaining(s,9000),1499000);C.toggle(s,9000);a.equal(C.remaining(s,10000),1498000)});
test('completion counted once',()=>{const s=C.initial();C.toggle(s,0);a.equal(C.finish(s,1500000),true);a.equal(s.sessions,1);a.equal(C.finish(s,1500001),false)});
test('mode and formatting',()=>{const s=C.initial();C.reset(s,'short');a.equal(C.format(s.left),'05:00');a.equal(C.format(999),'00:01')});
