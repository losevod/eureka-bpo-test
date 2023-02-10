#ifndef UNICODE
#define UNICODE
#endif
#pragma comment(lib, "netapi32.lib")

#include <stdio.h>
#include <assert.h>
#include <windows.h> 
#include <lm.h>
#include <napi.h>

using namespace Napi;

Napi::String Method(const Napi::CallbackInfo& info) {
  NET_API_STATUS status = NetUserEnum(NULL, 0, FILTER_NORMAL_ACCOUNT, NULL, MAX_PREFERRED_LENGTH, 0, 0, 0);
  Napi::Env env = info.Env();
  if (status == NERR_Success) {
      return Napi::String::New(env, "А");
  } else {
    return Napi::String::New(env, "Ы");
  }
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
  exports.Set(Napi::String::New(env, "EurekaBpoTest"),
              Napi::Function::New(env, Method));
  return exports;
}

NODE_API_MODULE(addon, Init)