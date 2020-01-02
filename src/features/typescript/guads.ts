// guard

/**
 * guard - вспомогательные конструкции, помогающие работать с типами
 */

function strip(x: string | number) {
  if (typeof x === 'number') {
    return x.toFixed(2);
  }
  return x.trim();
}

class MyResponce {
  header = 'response header';
  result = 'responsense result';
}

class MyError {
  header = 'response header';
  message = 'responsense error';
}

function handle(res: MyResponce | MyError) {
  if (res instanceof MyResponce) {
    return {
      info: res.header + res.result,
    };
  } else {
    return {
      info: res.header + res.message,
    };
  }
}

// ======

type AlertType = 'success' | 'danger' | 'warning';

function setAlertType(type: AlertType) {
  //
}
